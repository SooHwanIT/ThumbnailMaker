import Canvas from './Canvas'
import React, { useReducer } from 'react';
import './Css/Content.css'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
// import { jsPDF } from "jspdf";
// import * as htmlToImage from 'html-to-image';
// import download from 'download';

// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
// import { useState } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.className]: action.value
    };
}

const Content = () => {
    // const [myRef, setMyRef] = useState(React.createRef());
    const [state, setState] = useReducer(reducer, {
        title: '제목을 입력해주세요',
        title_size: 32,
        title_color: '#000000',
        title_outline_color: '#ffffff',

        subtitle: '부 제목을 입력해주세요',
        subtitle_color: '#000000',
        subtitle_outline_color: '#ffffff',

        background_color: '#ffffff',
        outline_color: '#000000',

        width_size: '500',
        height_size: '400',


    });

    //const { title, title_color , title_outline_color ,subtitle, subtitle_color ,subtitle_outline_color,background_color,outline_color,width_size,height_size} = state;
    const onChange = e => {
        setState(e.target);
    };

    const d = () => {
        console.log(document.getElementById('image__'));

    
            domtoimage.toBlob(document.getElementById('image__'))
                .then(function (blob) {
                    window.saveAs(blob, 'image__.png');
                });
        
        // domtoimage.toBlob(C).then(function (blob) {
        //     window.saveAs(blob, 'image__.png');
        // });
    }

    return (
        <div className='content'>
            <div className='frame'>
                <div id="image__">
                    <Canvas state={state} className="canvas" />
                </div>
            </div>
            <div className='memu'>
                {/* <p>Memu</p> */}

                <div className='div_title'>
                    <p className='samlltitle'>제목</p>
                    제목 : <input className='title' type='text' placeholder="이곳에 제목을 입력해주세요" onChange={onChange} />
                    size : <input className='title_size' type='number' value={state.title_size} onChange={onChange} />
                    <div className='div_title_option'>
                        배경 색 : <input className='title_color' type='color' onChange={onChange} />
                        윤곽선 색 : <input className='title_outline_color' type='color' onChange={onChange} />

                    </div>
                </div>

                <div className='div_subtitle'>
                    <p className='samlltitle'>부제목</p>
                    부제목 : <input className='subtitle' type='text' placeholder="이곳에 부제목을 입력해주세요" onChange={onChange} />
                    <div className='div_subtitle_option'>
                        배경 색 :  <input className='subtitle_color' type='color' onChange={onChange} />
                        윤곽선 색 :<input className='subtitle_outline_color' type='color' onChange={onChange} />
                    </div>

                </div>

                <div className='div_color'>
                    <p className='samlltitle'>배경</p>
                    width : <input className='width_size' type='number' placeholder="가로 넓이" value={state.width_size} onChange={onChange} />
                    height : <input className='height_size' type='number' placeholder="세로 넓이" value={state.height_size} onChange={onChange} /><br />
                    배경 색 : <input className='background_color' type='color' onChange={onChange} />
                    윤곽선 색 :<input className='outline_color' type='color' onChange={onChange} /><br />

                </div>

                <button onClick={d} className="button"><span>이미지 다운로드</span></button>

            </div>
            {/* <p className='thumbnail'>thumbnail</p> */}
        </div>



    )
};
export default Content;