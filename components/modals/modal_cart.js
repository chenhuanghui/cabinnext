import $ from 'jquery';

export default class ModalCart extends React.Component {
    componentDidMount() {
        console.log('loadmodal');
        // modal action
    }
    

    render() {
        return(
            <div role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title" data-cart="" data-popup="cart" class="drawer drawer--right">
                <div class="cart-drawer-container" data-popup-focus="cart" tabindex="-1">
                    <form id="CartDrawer" action="/cart" class="cart-drawer critical-hidden" method="post" novalidate="">
                        <div class="cart-drawer__header">
                            <h2 class="visually-hidden" id="cart-drawer-title">Shopping Cart</h2>
                            <button type="button" class="cart-drawer__close-button" data-popup-close="cart" data-cart-close="">
                                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow-back" viewBox="0 0 18 18">
                                    <path d="M1.5 9.347L10.414 1M9.674 17L1.502 8.653M1.648 9H17.5"></path>
                                </svg> <span class="cart-drawer__title">Continue shopping</span>
                            </button>
                        </div>
                        <div class="cart-drawer__content">
                            <p class="cart-drawer__empty-text" data-cart-empty-text="">Your cart is currently empty.</p>
                            <p class="cart-drawer__no-cookies-text">Enable cookies to use the shopping cart</p>
                            <div class="cart-drawer__items" data-cart-items="">
                                <div id="shopify-section-cart-items" class="shopify-section">
                                    <div class="cart-drawer__item" data-cart-item-product-id="5484849463460" data-cart-item="35364601659556:0a1aa8a812954ad613c178994ba6276f">
                                        <div class="cart-drawer__product">
                                            <div>
                                                <p class="cart-drawer__name">Com suon nuong sot BBQ</p>
                                            </div>
                                        </div>
                                        <div class="cart-drawer__tuning">
                                            <div class="cart-drawer__controls">
                                                <label for="quantity_35364601659556:0a1aa8a812954ad613c178994ba6276f" class="cart-drawer__label" aria-label="Quantity">Qty</label>
                                                <input id="quantity_35364601659556:0a1aa8a812954ad613c178994ba6276f" class="form__input cart-drawer__input" value="4" type="number" pattern="\d*" min="1" aria-label="Item quantity" data-cart-item-quantity=""/>
                                                <button aria-label="Remove Com suon nuong sot BBQ" class="cart-drawer__remove" data-remove="">Remove</button>
                                            </div>
                                            <div class="cart-drawer__price"><span class="cart-item__original-price cart-item__price">59.000₫</span>
                                            </div>
                                        </div>
                                        <p class="cart-drawer__error" aria-live="polite" data-cart-item-error=""></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cart-drawer__footer">
                            <div class="cart-drawer__totals">
                                <h3 class="cart-drawer__subtotal">Subtotal</h3>
                                <p class="cart-drawer__subtotal-value" data-cart-price="">236.000₫</p>
                                <p class="visually-hidden" data-price-live-region="" aria-live="polite" role="status" aria-hidden="true">Subtotal: 236.000₫</p>
                            </div>
                            <div data-discounts="">
                                <div id="shopify-section-cart-discounts" class="shopify-section"></div>
                            </div>
                            <p class="cart-drawer__notice">Taxes and shipping calculated at checkout</p>
                            <div class="cart-drawer__ctas">
                                <button type="submit" class="button" name="checkout" data-checkout-button="">Check Out</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}