import React, { useState } from 'react';
import ImageUpload from '../../components/atom/image-upload/ImageUpload';

export default {
  title: 'ImageUpload',
  component: ImageUpload
};

export const Default = () => {
  const [value, setValue] = useState(null);

  const handleChange = e => setValue(e.target.files[0]);

  return (
    <ImageUpload
      id="image-upload"
      name="ipt"
      text="Buscar arquivo"
      value={value}
      onChange={handleChange}
      onRemove={() => setValue(null)}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(null);
  return <ImageUpload id="image-upload" name="ipt" text="Buscar arquivo" value={value} onChange={setValue} disabled />;
};
