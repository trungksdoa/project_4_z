import React from 'react';
import PropType from 'prop-types';

Getcategory.PropType = {
	categoryList: PropType.array
};
Getcategory.defaultProps = {
	categoryList: []
};
function Getcategory(props) {
    const { categoryList } = props;
	return (
        <ul>
            {categoryList.map((post) => (
                <li>
                <a href="javascript:void(0);">
                    <span key={post.catagoryid}>{post.catagoryname}</span>
                </a>
            </li>
            ))}
        </ul>
        
    )
}
export default Getcategory;