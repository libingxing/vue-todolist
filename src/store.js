/*
 * 将数据保存至缓存中,将数据从缓存中读取出来
 */
const STORAGE_KEY="todos-vuejs";
export default{
	fetch(){
		//stringify方法将一个json对象解析成javascript对象
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
	},
	save(items){
		//stringify方法将一个javasscript对象解析成json对象
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
	}
}