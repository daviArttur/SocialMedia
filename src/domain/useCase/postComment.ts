import { Http } from "@/application/Http";
import { Post } from "../interfaces";


export class PostComment {

	constructor(private comment: string, private postId: string) {}

	async exec() {

    const payload = {
      comment: this.comment
    }

		const response = await new Http(`https://dogsapi.origamid.dev/json/api/comment/${this.postId}`).post(payload);
		
		if (response.error) {
			return { error: response.error };
		}
		return { data: response.data };
	}
}