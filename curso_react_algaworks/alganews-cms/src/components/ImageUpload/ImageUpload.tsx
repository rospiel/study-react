import { mdiDelete, mdiUpload } from '@mdi/js';
import Icon from '@mdi/react';
import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import * as IU from './ImageUpload.styles';

export interface ImageUploadProps {
  label: string
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null);


  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', e => {
        setFilePreview(String(e.target?.result));
      })

      reader.readAsDataURL(file);
    }
  }

  function buildLabelButton() {
    return (
      <div className="labelButton">
        Remover imagem <Icon color="#274060" size="24px" path={mdiDelete} />
      </div>
    )
  }

  if (filePreview) {
    return (
      <IU.ImagePreviewWrapper>
        <IU.ImagePreview preview={filePreview}>
          <Button variant={'text'} label={buildLabelButton()} onClick={() => setFilePreview(null)} />
        </IU.ImagePreview>
      </IU.ImagePreviewWrapper>
    )
  }
  
  return (
    <IU.Wrapper>
      <IU.Label>
        <Icon size={'24px'} path={mdiUpload} />
        { props.label }
        <IU.Input type="file" onChange={handleChange}/>
      </IU.Label>
    </IU.Wrapper>
  );
}

export default ImageUpload;