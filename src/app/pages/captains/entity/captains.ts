export interface Captains {
    id?: number;
    age?: number;
    bounce?: number;
    captainID?: string;
    car?: string;
    countOrdersDeliverd?: number;
    newMessageStatus?: boolean;
    drivingLicence?: string;
    image?: string;
    location?: string;
    city?: string;
    name?: string;
    rating?: { rate: number };
    salary?: number;
    state?: string;
    status?: string;
    totalBounce: { bounce: number }
}
