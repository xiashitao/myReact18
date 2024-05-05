export type Container = Element;
export type Instance = Element;

export const createInstance = (type: string): Instance => {
	// return {} as any;
	// TODO 处理props
	const element = document.createElement(type);
	return element;
};

export const appendInitialChild = (
	parent: Instance | Container,
	child: Instance
) => {
	console.log('parent', parent, child);
	parent.appendChild(child);
};

export const createTextInstance = (content: string) => {
	return document.createTextNode(content);
};

export const appendChildToContainer = appendInitialChild;
