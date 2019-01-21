export class User implements IUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string; suite: string; city: string; zipcode: number; geo: {
            lat: number; lng: number;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string; catchPhrase: string; bs: string;
    };
    picture: string

    constructor(user: IUser) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.address = user.address;
        this.phone = user.phone;
        this.website = user.website;
        this.company = user.company;
        this.picture = "";
    }

}

export interface IUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}