export interface PitchImages {
    small: string[];
    medium: string[];
    large: string[];
}

export interface PitchPayment {
    key: string;
    value: string;
    desc1?: any;
    desc2?: any;
}

export interface PitchAvailableSlots {
    morning: number;
    evening: number;
    weekend: number;
}

export interface PitchAttributes {
    name: string;
    status: string;
    images: PitchImages;
    sport: string;
    format: string;
    surface: string;
    facilities: string[];
    payment: PitchPayment[];
    about: string;
    mlp: boolean;
    online_booking: boolean;
    tac_link?: any;
    operator: string;
    opt_in_third_parties: boolean;
    featured: boolean;
    featuredOrder?: number;
    showFFPopup: boolean;
    available_slots: PitchAvailableSlots;
    available_slots_total: number;
}

export interface PitchData {
    type: string;
    id: string;
}

export interface PitchVenues {
    data: PitchData;
}

export interface PitchDatum {
    type: string;
    id: string;
}

export interface PitchPitchImages {
    data: PitchDatum[];
}

export interface PitchRelationships {
    venues: PitchVenues;
    pitchImages: PitchImages;
}

export interface PitchLinks {
    self: string;
    weblink: string;
}

export interface Pitch {
    type: string;
    id: string;
    attributes: PitchAttributes;
    relationships: PitchRelationships;
    links: PitchLinks;
}
