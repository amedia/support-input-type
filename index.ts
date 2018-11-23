const supportsInputType = (inputType: string): boolean => {
	const input = document.createElement("input");
	input.setAttribute("type", inputType);
	return input.type === inputType;
};

export default supportsInputType;
