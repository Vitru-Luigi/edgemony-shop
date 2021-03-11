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
	margin: 0 0.25rem;
	cursor: pointer;
	text-transform: capitalize;
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
