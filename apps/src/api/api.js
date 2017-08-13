let api = {
	'reg': '/reg',
	'login': '/login',
	'artlist': '/article/lists',
	'fartlist': '/article/articleLists',
	'getList': '/article/noAuthArtilcelists',
	'creatArc': '/article/create',
	'delArc': '/article/remove',
	'getOne': '/article/onePage',
	'fgetOne': '/article/noAuth',
	'editArc': '/article/edit',
	'classArc': '/classify/lists',
	'fclassArc': '/classify/noAuth',
	'delClass': '/classify/remove',
	'addClass': '/classify/create',
	'editClass': '/classify/edit'
}

//if(process.env.NODE_ENV !== 'production') {
	for(let k in api){
		api[k] = '/api' + api[k];
	}
//}

export default api
