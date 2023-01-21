import { Http } from "@/application/Http";
import { Post } from "../interfaces";


export class getPhotos {

	constructor(private page: number, private total: number) {}

	async exec() {

		const response = await new Http(`https://dogsapi.origamid.dev/json/api/photo/?_page=${this.page.toString()}&_total=${this.total.toString()}`).get<Post[]>();
		
		if (response.error) {
			return { error: response.error };
		}
		return { data: response.data };
	}
}