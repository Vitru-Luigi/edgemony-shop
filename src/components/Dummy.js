const Dummy = ({children, ...props}) => (
	<div className='Dummy' {...props}>
		{children}
	</div>
);

export default Dummy;
