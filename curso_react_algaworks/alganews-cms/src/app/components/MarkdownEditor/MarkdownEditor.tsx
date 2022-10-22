import MarkdownIt from "markdown-it";
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import FileService from "../../../sdk/services/File.service";
import { isTrue } from "../../../sdk/utils/objectUtil";

MdEditor.unuse(Plugins.FontUnderline);
const parser = new MarkdownIt();

/*Every link from a post will open in another tab*/
const defaultRender = parser.renderer.rules.link_open ||
  function(tokens: any, idx: any, options: any, env: any, self: any) {
    return self.renderToken(tokens, idx, options);
  };

parser.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var aIndex = tokens[idx].attrIndex('target');
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']);
  } else {
    //@ts-ignore
    tokens[idx].attrs[aIndex][1] = '_blank';
  }
  return defaultRender(tokens, idx, options, env, self);
};

export interface MarkdownEditorProps {
  onChange?: (text: string) => any;
  value?: string;
  readOnly?: boolean;
}

export default function MarkdownEditor (props: MarkdownEditorProps) {
  
  function confirmTextOnChange(text: string) {
    if (props.onChange) {
      props.onChange(text);
    }
  }

  async function handleImageUpload(file: File) {
    return FileService.upload(file);
  }
  
  return (
    <MdEditor 
      /* pass function to open file system */
      onImageUpload={handleImageUpload}
      readOnly={props.readOnly} 
      value={props.value} 
      style={{ height: isTrue(props.readOnly!) ? 'auto' : 300 }} 
      renderHTML={text => parser.render(text)} 
      /* remove preview */
      config={{ view: {html: false} }}
      onChange={({text}) => confirmTextOnChange(text)} view={isTrue(props.readOnly!) ? {
      menu: false, 
      md: false, 
      html: true
    }: undefined}/>
  );
  
}