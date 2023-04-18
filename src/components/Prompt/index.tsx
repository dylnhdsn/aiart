import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Tag, TAGS } from './tags';
import { css } from '@emotion/react';

const PromptChip = ({ prompt, getTagProps, index }: any) => (
  prompt && prompt.trim() !== '' ? (
    <Chip
      key={prompt}
      label={prompt}
      {...getTagProps({ index })}
      style={{ marginRight: '0.5rem' }}
    />
  ) : null
);

const TagChip = ({ tag, handleDeleteTag, getTagProps, index }: any) => (
  <Chip
    key={tag.label}
    label={tag.label}
    onDelete={() => handleDeleteTag(tag)}
    {...getTagProps({ index })}
    style={{ marginRight: '0.5rem' }}
  />
);

const Prompt: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleAutocompleteChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: (string | Tag)[],
  ) => {
    const newTags = value.filter((v) => typeof v !== 'string').map((v) => v as Tag);
    setSelectedTags(newTags);
    setPrompt('');
  };

  const handleDeleteTag = (tag: Tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const renderTags = (value: Array<Tag | string>, getTagProps: any) => {
    const tagChips = value
      .filter((v) => typeof v !== 'string')
      .map((tag, index) => (
        <TagChip
          tag={tag as Tag}
          handleDeleteTag={handleDeleteTag}
          getTagProps={getTagProps}
          index={index}
        />
      ));
    return (
      <>
        {tagChips}
        <PromptChip
          prompt={prompt}
          getTagProps={getTagProps}
          index={tagChips.length}
        />
      </>
    );
  };

  const handleToggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <>
      <Autocomplete
        freeSolo
        multiple
        options={TAGS}
        getOptionLabel={(option: Tag | string) => {
          if (typeof option === 'string') {
            return option;
          }
          return option.label;
        }}
        onChange={handleAutocompleteChange}
        value={selectedTags}
        renderTags={renderTags}
        renderInput={(params) => (
          <TextField
            {...params}
            label="add tags"
            variant="filled"
            onChange={handleInputChange}
            value={prompt}
            margin="normal"
          />
        )}
      />
      <Button
        variant="contained"
        onClick={handleToggleAdvanced}
      >
        {showAdvanced ? "Hide" : "Show"} advanced
      </Button>
      {showAdvanced && (
        <TextField
          placeholder="Advanced"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={selectedTags.map(tag => tag.words.join(", ")).join(":: ")}
          onChange={() => {}}
        />
      )}
    </>
  );
};


export default Prompt
