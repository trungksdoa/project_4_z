const author_block = ({ id, img, name, number }) => {
    function callAlert(id){
        alert(id);
    }
    return (
        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div className="tg-author">
                <figure><a href="javascript:void(0);"><img onClick={() => callAlert(id)} src={img} alt="image description" /></a></figure>
                <div className="tg-authorcontent">
                    <h2><a href="javascript:void(0);">{name}</a></h2>
                    <span>{number}</span>
                    <ul className="tg-socialicons">
                        <li className="tg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                        <li className="tg-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                        <li className="tg-linkedin"><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default author_block;