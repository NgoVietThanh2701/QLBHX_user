import { useSelector } from "react-redux"

export const CartDetail = () => {

    const {carts} = useSelector((state) => state.cart);

    console.log(carts)

    return (
        <section className="cart">
            <div className="title">
                <span>Sản phẩm</span>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Số tiền</span>
                <span>Thao tác</span>
            </div>
            
            <div className="item-product">
                {carts.map(cart => (
                    <div>
                        <input className="checkbox" type="checkbox" />
                        <img src="" className="image-product" alt="" />
                        <span className="name"></span>
                        <div className="price"></div>
                        <div className="count"></div>
                        <div className="delete">Xoa</div>
                    </div>
                ))}
            </div>
            
        </section>
    )
}