import {useEffect, useState} from "react";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function RichTextEditor(props: any) {
    const [id, setId] = useState(0);
    const [value, setValue] = useState('');
    
    useEffect(() => {
        props.sendValues(value);
    }, []);

    function sendValues(data: string){
        // console.log(data);
        setValue(data);
        props.sendValues(data);
    }

    function savePost(): void{
        
    }

    function savedata(): void{

    }

    return(
        <>
            {/* <ReactQuill theme="snow" value={value} onChange={sendValues} style={{backgroundColor: "#fff" }}/> */}
            {/* <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                config={ {
                    plugins: [ Paragraph, Bold, Italic, Essentials ],
                    toolbar: [ 'bold', 'italic' ]
                }}
                onReady={ editor => {
                    console.log( 'Editor is ready to use!', editor );
                }}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                }}
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                }}
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                }}
            /> */}
            <CKEditor
                editor={ ClassicEditor }
                data="<p></p>"
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    sendValues(data);
                    setValue(data);
                }}
                onBlur={ ( event, editor ) => {
                    const data = editor.getData();
                    sendValues(data);
                }}
                onFocus={ ( event, editor ) => {
                    // console.log( 'Focus.', editor );
                }}
            />
        </>
    );
}