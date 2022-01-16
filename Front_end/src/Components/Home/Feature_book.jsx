import React from 'react';
import { FeatureBook } from '../Book/Books.jsx';
import { objectData } from './Object';
const featureBook = (props) => {
    const data = props.lasted_book;
    //Logic here
    return (
        <section className="tg-bglight tg-haslayout">
            <div className="container">
                <div className="row">
                    <FeatureBook key={data.id} {...data}></FeatureBook>
                </div>
            </div>
        </section>
    )
}
export default featureBook;