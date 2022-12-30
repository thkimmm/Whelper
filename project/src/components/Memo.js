import React, { useState } from 'react';
import WriteContentData from '../data'

import '../css/components.css';

function Memo() {

    // 변수에 데이터베이스의 값을 넣어주면 알아서 될 것 같은데....?

    let [MainMemoData, MainMemoCorrect] = useState(['내용이 길어진다고 해도 아무런 문제가 없을지니, 일단은 계속 적고 봐야겠다', '메인 데이터가 들어오는 변수02', '재미 삼아 하나 더 추가']);
    // 북마크 등록시 메인에 띄워주는...
    // let [Bookmark, BookMarkFunc ] = useState([0, 0, 0]);

    function MainMemoSet(props, i) {

        // 메모 수정
        let [correctMainMemo, correctMainMemoInput] = useState('');

        return (

            <div className='Main_memo_textarea'>

                <textarea onInput={(e) => {
                    correctMainMemoInput(e.target.value);
                }}>
                    {props.MainMemoData[i]}
                </textarea>

                <ul className='main_textarea_correct'>
                    <li>
                        <button
                            onClick={(i) => {
                                let dataCorrect = [...MainMemoData];
                                dataCorrect[i].unshift(correctMainMemo);
                                correctMainMemoInput(dataCorrect)

                            }}>확인
                        </button>
                    </li>
                    <li>
                        <button onClick={(i) => {
                            MainMemoDirect(false, i);
                        }}>취소</button>
                    </li>
                </ul>
            </div>

        )

    }

    // textarea 열고 닫기
    let [MainMemoActive, MainMemoDirect] = useState(false);

    // 새로 작성되는 글이 담기는 곳.
    let [AddMainMemo, AddMainMemoInput] = useState('');

    return (

        <div className='common_page'>

            <div className='content_area'>

                {/* 추후에 추가될 내용. : 범주화가 가능해야 한다. */}

                <div className='memo_btn'>
                    <button href='#' onClick={() => {
                        let dataCorrect = [...MainMemoData];
                        dataCorrect.unshift(AddMainMemo);
                        MainMemoCorrect(dataCorrect)
                    }}>메모 추가하는 버튼</button>
                </div>

                {/* 메모창의 경우 작은 인풋 박스를 만들어 놓고 저장만 하면 차례대로 기입되는 방식. */}

                <div className='memo_input'>

                    <textarea onInput={(e) => {
                        AddMainMemoInput(e.target.value);
                    }}>
                    </textarea>

                </div>

                {

                    MainMemoData.map(function (props, i) {

                        return (

                            <div className='memotext' key={i}>

                                <div className='memo_annotation'>
                                    <a href='javascritp:void(0)'>
                                        주석
                                    </a>
                                </div>

                                {/* 내용이 들어오는 영역 */}

                                <div className='memo_text'>

                                    <div className='memo_box'>
                                        <ul className='content_memo_btn'>
                                            <li>
                                                <a href="#" onClick={(i) => {
                                                    MainMemoDirect(true, i);
                                                }}>
                                                    수정
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' onClick={(i) => {
                                                    let dataCorrect = [...MainMemoData];
                                                    dataCorrect.splice(i, 1);
                                                    MainMemoCorrect(dataCorrect);
                                                }}>
                                                    삭제
                                                </a>
                                            </li>
                                        </ul>
                                        {/* 주 내용이 들어오는 영역 // 데이터베이스에서 불러오는 영역 */}
                                        <p className='main_memo'>
                                            {MainMemoData[i]}
                                        </p>

                                        {/* 수정 클릭 시에 열리는 코드. */}
                                        {
                                            MainMemoActive == true ? <MainMemoSet MainMemoData={MainMemoData[i]} i={1}/> : null
                                        }
                                    </div>

                                    <div className='memo_box memo_box_annotaion'>
                                        <ul className='content_memo_btn'>
                                            <li>
                                                <a href="#">
                                                    수정
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    삭제
                                                </a>
                                            </li>
                                        </ul>
                                        {/* 주석이 들어오는 영역 // 데이터베이스에서 불러오는 영역 */}
                                        <p className='sub_memo'>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

// 데이터베이스에서 불러오는 컴포넌트

function AnnotationContent() {

    // 주석이 있는 경우와 없는 경우가 다르다. 그러나 데이터베이스에서는 순차적으로 데이터가 기입된다.
    // 고로 주석 추가 시 데이터를 추가하면 어차피 데이터가 순차적으로 기입될 것이다.
    // 그런데 삭제할 경우에는....? 어차피 하나가 사라지면...
    // 아 근데.. 데이터가 중구난방으로 들어갈 수도 있다.
    // 일단 보류
    return (

        // memo 버튼 추가. 수정, 삭제, 주석 추가 등...

        <div className='Annotation_content'>

            <div className='memo_annotation'>
                <button>
                    주석
                </button>
            </div>

            {/* 내용이 들어오는 영역 */}

            <div className='memo_box memo_box_annotaion'>

                <ul className='content_memo_btn'>
                    <li>
                        <button className=''>
                            수정
                        </button>
                    </li>
                    <li>
                        <button>
                            삭제
                        </button>
                    </li>
                </ul>

                {/* 보조 내용이 들어오는 영역 // 데이터베이스에서 불러오는 영역 */}

                <p className='sub_memo'>


                </p>

            </div>

        </div>

    )

}

// 주석이 추가될 경우에 형성되는 컴포넌트
// 굳이 필요한가???

function Annotation() {

    return (

        <div className='Annotation'>

            <textarea></textarea>

        </div>

    )

}

export default Memo;
