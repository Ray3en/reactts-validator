


import { KEYS } from '../constants';
import { EditorAPI } from '../core';
import React from '../lib';
import { TSX } from '../lib/types';
import { checkIframeContent } from './checkContent';

interface IframeTestProps{
  editor: EditorAPI,
  consoleRef: TSX.RefObj<HTMLDivElement>
} 

const IframeTest = ({ consoleRef}:IframeTestProps) => {

  const editor: EditorAPI = window["api_editor"];

  const handleTestRun = async () => {
    const iframe = document.querySelector('iframe');
    const iframeDoc = iframe?.contentDocument;
    const pTag = iframeDoc?.querySelector('p');

    const testResult = checkIframeContent(
      {
        pathArray: ["p"],
        expected: "123",
        node: pTag
      }
    )
    
    const js = localStorage.getItem(KEYS.__LS_JS__);
    const html = localStorage.getItem(KEYS.__LS_HTML__);
    const css = localStorage.getItem(KEYS.__LS_CSS__);
    const typescript = localStorage.getItem(KEYS.__LS_TS__);
    const json = localStorage.getItem(KEYS.__LS_JSON__);
    const consoleContent = consoleRef.current?.innerHTML

    console.log("Test results:", testResult, {
      js, html, css, typescript, json, consoleContent
    })
  };

 

  return (

        <button
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            zIndex: 100,
            backgroundColor: "green",
            padding: "16px", cursor: "pointer"
          }}
          onclick={handleTestRun}
        >
          Run Test
        </button>

  );
};

export default IframeTest;