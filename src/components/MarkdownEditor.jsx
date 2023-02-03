import React, {useRef, useEffect} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import PropTypes from 'prop-types';

const MarkdownEditor = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        const refElement = ref.current;

        const editor = new Editor({
            el: refElement,
            hideModeSwitch: true
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            props.onContentChange(content);
        });
    }, []);

    return <div id="editor" ref={ref} />
};

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func
};

export default MarkdownEditor;