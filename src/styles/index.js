import styled from 'styled-components';

export const Button = styled.button`
	background-color: transparent;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	border-radius: 4px;
	padding: 10px;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	color: black;
	margin: 1rem 0.25rem;
	cursor: pointer;
	text-transform: capitalize;
	&:hover {
		background-color: #79b0a1;
	}
	@media screen and (max-width: 880px) {
		font-size: 8px;
		padding: 5px;
	}
`;

// export const BlueButton = styled(Button)`
// 	color: black;
// 	background-color: red;
// `;

export const Description = styled.p`
	background-color: transparent;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	border-radius: 4px;
	padding: 10px;
`;

export const Title = styled.h3`
	background-color: transparent;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	border-radius: 4px;
	padding: 10px;
`;

export const CategoriesFilter = styled.div`
	background-color: transparent;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	border-radius: 4px;
	padding: 10px;
`;

// const Button = ({children, ...props}) => (
// 	<button className='button' {...props}>
// 		{children}
// 	</button>
// );

// BODY //
export const Body = styled.div`
	/* height: 100vh; */
	/* overflow: hidden; */
	/* background-color: red; */
`;
// END BODY //

// CARDPRODUCT //

export const CartProductContainer = styled.div`
	margin: 20px 0 30px;
`;

export const CartProductQty = styled.div`
	margin: 20px 0 30px;
`;

export const Qty = styled.span`
	margin: 0 5px;
`;

export const CartProductImage = styled.img`
	height: 100px;
`;

export const CartProductTitle = styled.h3`
	font-size: 12px;
`;

export const CartProductPrice = styled.p`
	font-size: 12px;
`;

// END CARDPRODUCT //

// CART //

export const CartContainer = styled.div``;

export const CartTitle = styled.h2``;

export const CartMsg = styled.p``;

// END CART //

// ALERT //

export const AlertContainer = styled.div``;
export const AlertMsg = styled.p``;

// END ALERT //

// CategoriesFilter //

export const CategoriesFilterContainer = styled.div``;

// END CategoriesFilter //

// Footer //

export const FooterContainer = styled.footer``;
export const FooterNav = styled.nav``;

// END Footer //

// Header //

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 78px;
	background-color: black;
	padding: 10px;
	display: flex;
	align-items: center;
	z-index: 100;
`;
export const HeaderImage = styled.img`
	width: 200px;
`;

// END Header //

// HeaderCart //

export const HeaderCartContainer = styled.div`
	color: white;
	margin-left: auto;
	padding-right: 25px;
`;

export const HeaderCartPrice = styled.span``;

export const HeaderCartIcon = styled.span`
	font-size: 1.6em;
	position: relative;
	margin-left: 10px;
	cursor: pointer;
`;

export const HeaderCartQty = styled.span`
	position: absolute;
	top: -15px;
	right: -15px;
	border-radius: 50%;
	background-color: #ccc;
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	font-size: 11px;
	font-weight: bold;
`;

// END HeaderCart //

// Hero //

export const HeroContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const HeroImage = styled.img`
	box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
	max-width: 40%;
	border-radius: 7px;
`;

export const HeroTitle = styled.h1``;

export const HeroDescription = styled.p`
	font-size: 1.3rem;
`;

// END Hero //

// Loader //

export const LoaderContainer = styled.span`
	margin: 5% auto;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	display: inline-block;
	border-top: 4px solid #fff;
	border-right: 4px solid transparent;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	&::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: 0;
		top: 0;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border-bottom: 4px solid #ff3d00;
		border-left: 4px solid transparent;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

// END Loader //

// Message //

export const MessageContainer = styled.span`
	text-align: center;
`;

// Message //

// Product //
export const ProductContainer = styled.fieldset`
	margin: 1rem auto;
	border-radius: 7px;
	box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25rem;
	border: none;
`;

export const ProductImageWrap = styled.legend`
	height: 180px;
`;

export const ProductImage = styled.img`
	border-radius: 7px;
	height: 100%;
`;

export const ProductContent = styled.article`
	border-radius: 0 7px 10px 7px;
	background-color: #ffffff;
`;

export const ProductContentText = styled.div``;
export const ProductContentTitle = styled.h3`
	font-size: 34px;
	color: #474747;
	min-height: 3rem;
	padding: 0.2rem;
`;
export const ProductContentCategory = styled.h4`
	font-size: 13px;
	font-weight: 400;
	text-transform: uppercase;
	color: #d2d2d2;
	letter-spacing: 0.2em;
`;
export const ProductContentDescription = styled.p`
	line-height: 1.7em;
	font-size: 12px;
	overflow: hidden !important;
	min-height: 7.5rem;
	padding: 0.2rem;
`;
export const ProductContentPrice = styled.span`
	display: inline-block;
	font-size: 22px;
	font-weight: 300;
`;

// End Product //

// ProductList //

export const ProductListContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	@media screen and (max-width: 880px) {
		height: 60vh;
		overflow-x: auto;
		flex-direction: column;
	}
`;

// End ProductList //

// ProductModal //

export const ProductModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	${({isOpen}) => (isOpen ? 'opacity: 1;z-index: 100' : 'opacity: 0; z-index: -100')};
`;

export const ProductModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(222, 222, 222, 0.85);
	transition: opacity 0.5s ease-in-out;
	${({isOpen}) => (isOpen ? 'opacity: 1; cursor: pointer' : 'opacity: 0; cursor: none')}
`;

export const ProductModalBody = styled.div`
	max-width: 520px;
	width: calc(100% - 20px - 20px);
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 0 2px 36px rgba(0, 0, 0, 0.25);
	position: relative;
	margin-left: 20px;
	margin-right: 20px;
	padding: 30px;
	transition: opacity 0.5s ease-in-out, transform 0.333s ease-out;
	${({isOpen}) => (isOpen ? 'opacity: 1; translateY(0)' : 'opacity: 0; translateY(20px)')};
`;

export const ProductModalContent = styled.div``;

export const ProductModalImage = styled.img`
	width: 100%;
	height: 500px;
	object-fit: contain;
	object-position: center;
	border: 1px solid red;
`;

export const ProductModalTitle = styled.h2``;

export const ProductModalDescription = styled.p``;

export const ProductModalPrice = styled.span`
	font-size: 24px;
	text-align: right;
	font-weight: bold;
`;

// End ProductModal //
