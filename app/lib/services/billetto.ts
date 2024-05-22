export type BilletoEvent = {
  availability: Availability;
  created_at: Date;
  currency: string;
  ends_at: Date;
  id: string;
  kind: string;
  location: string;
  name: string;
  object: string;
  online_event: boolean;
  organization: string;
  parent: null;
  plans: Plans;
  public: boolean;
  public_url: string;
  published_at: Date;
  starts_at: Date;
  state: string;
  total_capacity: number;
  updated_at: Date;
  venue: null;
};

export interface Availability {
  available: number;
  status: string;
}

export interface Plans {
  data: any[];
  has_more: boolean;
  object: string;
  total: number;
}

const OPTIONS = {
  method: "GET",
  headers: {
    "Api-Keypair": `${process.env.BILLETTO_APP_ID}:${process.env.BILLETTO_ACCESS_KEY_SECRET}`,
    "Billetto-Version": "v2023-12-21",
    accept: "application/json",
  },
};

const BILLETO_BASE_URL = "https://billetto.dk/api/v3/organiser/events/";

export async function getAllLocations(): Promise<BilletoEvent[]> {
  let data = [];
  try {
    const urls = [
      // Oslo
      BILLETO_BASE_URL + "986962",
      // Kristiansand
      BILLETO_BASE_URL + "957609",
      // Bergen
      BILLETO_BASE_URL + "986958",
      // Stavanger
      BILLETO_BASE_URL + "990300",
    ];

    const requests = urls.map((url) => fetch(url, OPTIONS));
    const responses = await Promise.all(requests);
    const errors = responses.filter((response) => !response.ok);

    if (errors.length > 0) {
      throw errors.map((response) => Error(response.statusText));
    }

    const json = responses.map((response) => response.json());
    data = await Promise.all(json);
  } catch (errors) {
    throw new Error("Failed to fetch data");
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return data;
}

export async function getEventByName(name: string): Promise<BilletoEvent> {
  const LOCATIONS = {
    oslo: "986962",
    kristiansand: "957609",
    bergen: "986958",
    stavanger: "990300",
  };

  let data: BilletoEvent;

  try {
    const url = BILLETO_BASE_URL + LOCATIONS[name as keyof typeof LOCATIONS];

    const res = await fetch(url, OPTIONS);
    data = await res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
