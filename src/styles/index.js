import styled from 'styled-components';
import {PropTypes} from 'prop-types';
import theme from 'styled-theming';

const bgColor = theme.variants('mode', 'variant', {
	default: {light: '#e5e5e5', dark: '#14213D'},
	primary: {light: '#1266F1', dark: 'darkblue'},
	secondary: {light: '#B23CFD', dark: 'darkblue'},
	success: {light: '#00B74A', dark: 'darkgreen'},
	danger: {light: '#F93154', dark: 'darkgreen'},
	warning: {light: '#FFA900', dark: 'darkorange'},
	info: {light: '#39C0ED', dark: 'darkorange'},
});

const color = theme.variants('mode', 'variant', {
	default: {light: '#000000', dark: '#ffffff'},
	primary: {light: 'blue', dark: 'darkblue'},
	secondary: {light: 'blue', dark: 'darkblue'},
	success: {light: 'green', dark: 'darkgreen'},
	danger: {light: 'green', dark: 'darkgreen'},
	warning: {light: 'orange', dark: 'darkorange'},
	info: {light: 'orange', dark: 'darkorange'},
});

const border = theme.variants('mode', 'variant', {
	default: {light: '1px solid rgba(41, 15, 15, 0.171)', dark: '1px solid rgba(200, 177, 177, 0.445)'},
	primary: {light: 'blue', dark: 'darkblue'},
	secondary: {light: 'blue', dark: 'darkblue'},
	success: {light: 'green', dark: 'darkgreen'},
	danger: {light: 'green', dark: 'darkgreen'},
	warning: {light: 'orange', dark: 'darkorange'},
	info: {light: 'orange', dark: 'darkorange'},
});

// const shadow = theme.variants('mode', 'variant', {
// 	default: {light: '#000000', dark: '#ffffff'},
// 	primary: {light: 'blue', dark: 'darkblue'},
// 	secondary: {light: 'blue', dark: 'darkblue'},
// 	success: {light: 'green', dark: 'darkgreen'},
// 	danger: {light: 'green', dark: 'darkgreen'},
// 	warning: {light: 'orange', dark: 'darkorange'},
// 	info: {light: 'orange', dark: 'darkorange'},
// });

const borderRadius = {
	sm: '4px',
	md: '6px',
	lg: '8px',
};

// const color = theme('mode', {
// 	light: '#fff',
// 	dark: '#000',
// });

// MAIN //

export const Main = styled.main`
	margin-top: 40px;
	display: flex;
	justify-self: center;
	align-items: center;
	flex-direction: column;
`;

// END MAIN //

// BUTTON //

export const Button = styled.button`
	background-color: ${bgColor};
	color: ${color};
	border-radius: ${borderRadius.sm};
	border: ${border};
	font-family: inherit;
	outline: none;
	padding: 10px;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	margin: 1rem 0.25rem;
	cursor: pointer;
	text-transform: capitalize;
	&:hover {
		background-color: #9eaca8;
	}
	&:disabled {
		background-color: #7e5f5f;
	}
	${({isSelected}) => isSelected && 'background-color: coral;'};
	@media screen and (max-width: 880px) {
		font-size: 8px;
		padding: 5px;
	}
`;

Button.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

Button.defaultProps = {
	variant: 'default',
};

// END BUTTON //

// DARKMODEBUTTON //

export const DarkModeButton = styled(Button)`
	position: absolute;
	top: -0.5rem;
	right: 12rem;
	z-index: 1000;
`;

// END DARKMODEBUTTON //

export const Description = styled.p`
	background-color: transparent;
	border-radius: 4px;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	padding: 10px;
`;

export const Title = styled.h3`
	background-color: transparent;
	border-radius: 4px;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	padding: 10px;
`;

export const CategoriesFilter = styled.div`
	background-color: transparent;
	border-radius: 4px;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	padding: 10px;
`;

// const Button = ({children, ...props}) => (
// 	<button className='button' {...props}>
// 		{children}
// 	</button>
// );

// BODY //
export const Body = styled.div`
	background-color: ${bgColor};
	color: ${color};
	height: calc(100vh - 3rem);
	overflow: auto;
	margin-top: 3rem;
`;

Body.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

Body.defaultProps = {
	variant: 'default',
};
// END BODY //

// CARTPRODUCT //

export const CartProductContainer = styled.div`
	background-color: ${bgColor};
	color: ${color};
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

CartProductContainer.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

CartProductContainer.defaultProps = {
	variant: 'default',
};

// END CARTPRODUCT //

// CART //

export const CartContainer = styled.div`
	margin-top: 5rem;	
	height: calc(100vh - 5rem);
	background-color: ${bgColor};
	color: ${color};
`;

export const CartTitle = styled.h2``;

export const CartMsg = styled.p``;

export const CartPrice = styled.div``;

CartContainer.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

CartContainer.defaultProps = {
	variant: 'default',
};

// END CART //

// ALERT //

export const AlertContainer = styled.div``;
export const AlertMsg = styled.p``;

// END ALERT //

// CATEGORIESFILTER //

export const CategoriesFilterContainer = styled.div``;

// END CATEGORIESFILTER //

// FOOTER //

export const FooterContainer = styled.footer`
	background-color: ${bgColor};
	color: ${color};
	box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
	min-height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
`;
export const FooterNav = styled.nav``;

FooterContainer.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

FooterContainer.defaultProps = {
	variant: 'default',
};

// END FOOTER //

// HEADER //

export const HeaderContainer = styled.header`
	background-color: ${bgColor};
	color: ${color};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 78px;
	padding: 10px;
	display: flex;
	align-items: center;
	z-index: 100;
`;

export const HeaderImage = styled.img`
	width: 200px;
`;

HeaderContainer.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

HeaderContainer.defaultProps = {
	variant: 'default',
};

// END HEADER //

// HEADERCART //

export const HeaderCartContainer = styled.div`
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

// END HEADERCART //

// HERO //

export const HeroContainer = styled.section`
	background-color: ${bgColor};
	color: ${color};
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

export const HeroTitle = styled.h1`
	margin: 1rem;
`;

export const HeroDescription = styled.p`
	font-size: 1.3rem;
	margin: 1rem;
`;

HeroContainer.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

HeroContainer.defaultProps = {
	variant: 'default',
};

// END HERO //

// LOADER //

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

// END LOADER //

// MESSAGE //

export const MessageContainer = styled.span`
	text-align: center;
`;

// MESSAGE //

// PRODUCT //

export const ProductContainer = styled.div`
	/* margin-top: 5rem;	 */
	height: calc(100vh - 5rem);
	background-color: ${bgColor};
	color: ${color};;
	box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: none;
`;

ProductContainer.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

ProductContainer.defaultProps = {
	variant: 'default',
};

export const ProductImageWrap = styled.div`
	margin: 0 auto;
	height: 180px;
`;

export const ProductImage = styled.img`
	margin-top: 6rem;
	border-radius: 7px;
	min-height: 400px;
`;

export const ProductContent = styled.article`
	border-radius: 0 7px 10px 7px;
	margin-top: 1rem;
`;

export const ProductContentText = styled.div`
	margin: 0.5rem;
`;
export const ProductContentTitle = styled.h3`
	font-size: 16px;
	padding: 0.2rem;
	text-align: center;
`;

export const ProductContentCategory = styled.h4`
	margin-top: 0.3rem;
	font-size: 14px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	text-align: center;
`;
export const ProductContentDescription = styled.p`
	line-height: 1.7em;
	font-size: 14px;
	overflow: hidden !important;
	padding: 2rem 20rem ;
	overflow: hidden;
`;
export const ProductContentPrice = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 22px;
	font-weight: 300;
	padding: 1.5rem;
	text-align: center;
`;

// END PRODUCT //

// PRODUCTLIST //

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

// END PRODUCTLIST //


// PRODUCTITEM //

export const ProductItemContainer = styled.fieldset`
	background-color: ${bgColor};
	color: ${color};
	margin: 1rem auto;
	border-radius: 7px;
	box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25rem;
	border: none;
`;

ProductItemContainer.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

ProductItemContainer.defaultProps = {
	variant: 'default',
};

export const ProductItemImageWrap = styled.legend`
	margin: 0 auto;
	height: 180px;
`;

export const ProductItemImage = styled.img`
	border-radius: 7px;
	max-height: 80%;
	min-height: 80%;
`;

export const ProductItemContent = styled.article`
	border-radius: 0 7px 10px 7px;
`;

export const ProductItemContentText = styled.div`
	margin: 0.5rem;
`;
export const ProductItemContentTitle = styled.h3`
	font-size: 16px;
	min-height: 6rem;
	max-height: 6rem;
	padding: 0.2rem;
	text-align: center;
`;

export const ProductItemContentCategory = styled.h4`
	margin-top: 0.3rem;
	font-size: 14px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	text-align: center;
	min-height: 2rem;
	max-height: 2rem;
`;
export const ProductItemContentDescription = styled.p`
	line-height: 1.7em;
	font-size: 14px;
	overflow: hidden !important;
	padding: 0.8rem;
	min-height: 12rem;
	max-height: 12rem;
	overflow: hidden;
`;
export const ProductItemContentPrice = styled.span`
	display: inline-block;
	font-size: 22px;
	font-weight: 300;
	padding: 1.5rem;
`;

// END PRODUCTITEM //

// PRODUCTMODAL //

// export const ProductModalContainer = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100vw;
// 	height: 100vh;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	z-index: 100;
// 	transition: opacity 0.5s ease-in-out;
// 	${({isOpen}) => (isOpen ? 'opacity: 1;pointer-events: auto;' : 'opacity: 0; pointer-events: none;')};
// `;

// export const ProductModalOverlay = styled.div`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	background-color: rgba(222, 222, 222, 0.85);
// 	transition: opacity 0.5s ease-in-out;
// 	${({isOpen}) => (isOpen ? 'opacity: 1; cursor: pointer' : 'opacity: 0; cursor: none')}
// `;

// export const ProductModalBody = styled.div`
// 	max-width: 520px;
// 	width: calc(100% - 20px - 20px);
// 	border-radius: 5px;
// 	background-color: #fff;
// 	box-shadow: 0 2px 36px rgba(0, 0, 0, 0.25);
// 	position: relative;
// 	margin-left: 20px;
// 	margin-right: 20px;
// 	padding: 30px;
// 	transition: opacity 0.5s ease-in-out, transform 0.333s ease-in-out;
// 	${({isOpen}) => (isOpen ? 'opacity: 1; translateY(0)' : 'opacity: 0; translateY(20px)')};
// `;

// export const ProductModalContent = styled.div``;

// export const ProductModalImage = styled.img`
// 	width: 100%;
// 	height: 300px;
// 	object-fit: contain;
// 	object-position: center;
// `;

// export const ProductModalTitle = styled.h2``;

// export const ProductModalDescription = styled.p``;

// export const ProductModalPrice = styled.span`
// 	font-size: 24px;
// 	text-align: right;
// 	font-weight: bold;
// `;

// END PRODUCTMODAL //

// RIGHTSIDEBAR //
export const RightSideBarContainer = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	${({isOpen}) => (isOpen ? 'opacity: 1;pointer-events: auto;z-index: 200' : 'opacity: 0; pointer-events: none; z-index: -100')};
`;
export const RightSideBarOverlay = styled.div`
	background-color: rgba(222, 222, 222, 0.85);
	position: absolute;
	width: 100%;
	height: 100%;
	transition: opacity 0.5s ease-in-out;
	${({isOpen}) => (isOpen ? 'opacity: 1' : 'opacity: 0')};
`;

export const RightSideBarBody = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	padding: 10px;
	box-sizing: border-box;
	box-shadow: 0 2px 36px rgba(0, 0, 0, 0.25);
	transition: opacity 0.5s ease-in-out, transform 0.333s ease-out;
	${({isOpen}) => (isOpen ? 'opacity: 1; translateX(0)' : 'opacity: 0; translateX(100%)')};
`;

export const RightSideBarHeader = styled.header``;

// END RIGHTSIDEBAR //

// SEARCH //
export const SearchContainer = styled.div`
	position: relative;
	width: 180px;
	height: 40px;
	margin-right: 3.5rem;
	@media screen and (max-width: 880px) {
		font-size: 8px;
		padding: 5px;
	}
`;

export const SearchInput = styled.input`
	color: black;
	background-color: transparent;
	position: absolute;
	// top: 0;
	// left: 0;
	margin: 1rem 0.25rem;
	width: 180px;
	height: 40px;
	font-family: inherit;
	border: 1px solid rgba(41, 15, 15, 0.171) !important;
	outline: none;
	border-radius: 4px;
	padding: 0 10px 0 35px;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	@media screen and (max-width: 880px) {
		font-size: 8px;
		padding: 5px;
		width: 120px;
		height: 20px;
		padding: 0 10px 0 35px;
		i {
			position: absolute;
			top: 33% !important;
			left: 10px;
		}
	}
`;
export const SearchIcon = styled.i`
	color: black;
	position: absolute;
	border-right: 1px solid #fff;
	top: 87%;
	left: 10px;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	padding-right: 10px;
`;

// END SEARCH //

// SEARCHBOX //

export const SearchBox = styled.section`
	display: flex;
	margin: 0.5rem;
`;

// END SEARCHBOX //

// 404

export const NotFound404 = styled.div`
	background-color: ${bgColor};
	color: ${color};
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 10vh;
`;

NotFound404.propTypes = {
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

NotFound404.defaultProps = {
	variant: 'default',
};

export const NotFoundBody = styled.div`
	width: 90vw;
	height: 60vh;
	border-radius: 5px;
	padding: 0 10px;
	@media (min-width: 768px) {
		width: 50vw;
	}
`;

export const NotFoundHeader = styled.span`
	display: flex;
	text-align: center;
	justify-content: center;
	font-size: 3rem;
	padding-top: 10vh;
	font-weight: 800;
`;

export const NotFoundMsg = styled.div`
	font-size: 1.5rem;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
`;

// END 404 //
