import { mdiDelete, mdiUpload } from '@mdi/js';
import Icon from '@mdi/react';
import { ChangeEvent, useEffect, useState } from 'react';
import FileService from '../../../sdk/services/File.service';
import Button from '../Button/Button';
import Loading from '../Loading'; 
import * as IU from './ImageUpload.styles';

export interface ImageUploadProps {
  label: string
  onImageUpload: (imageUrl: string) => any
  preview?: string
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    setFilePreview(props.preview)
  }, [props.preview])


  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      setPublishing(true);
      const reader = new FileReader();

      reader.addEventListener('load', async e => {
        setFilePreview(String(e.target?.result));
        try {
          const imageUrl = await FileService.upload(file);
          props.onImageUpload(imageUrl);
        } finally {
          setPublishing(false);
        }
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
        <Loading show={publishing} blur={true} />
        <IU.ImagePreview preview={filePreview}>
          <Button variant={'text'} label={buildLabelButton()} 
            onClick={() => { 
              setFilePreview(undefined);
              props.onImageUpload('');
            }} />
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