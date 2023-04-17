import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { Tag, TAGS } from './tags';

const PromptInput: React.FC = () => {
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
        <Chip
          key={(tag as Tag).label}
          label={(tag as Tag).label}
          onDelete={() => handleDeleteTag(tag as Tag)}
          {...getTagProps({ index })}
          style={{ marginRight: '0.5rem' }}
        />
      ));
    const promptChip =
      prompt && prompt.trim() !== '' ? (
        <Chip
          key={prompt}
          label={prompt}
          {...getTagProps({ index: tagChips.length })}
          style={{ marginRight: '0.5rem' }}
        />
      ) : null;
    return [...tagChips, promptChip];
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
            label="Add a tag"
            variant="outlined"
            onChange={handleInputChange}
            value={prompt}
          />
        )}
      />
      <br />
      <br />
      <button onClick={handleToggleAdvanced}>{showAdvanced ? "Hide" : "Show"} advanced</button>
      {showAdvanced && (
        <TextField
          label="Advanced"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={selectedTags.map(tag => tag.words.join(", ")).join("; ")}
          onChange={() => {}}
        />
      )}
    </>
  );
};

export default PromptInput;

