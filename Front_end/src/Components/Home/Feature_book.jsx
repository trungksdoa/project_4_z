import React from 'react';
import { FeatureBook } from '../Book/Books.jsx';
import { data } from './Object';
const featureBook = () => {
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