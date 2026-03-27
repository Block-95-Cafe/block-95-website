interface Block95 {
  address: string;
  cityAndState: string;
  schedule: { [day: string]: string };
}

export const block95: Block95 = {
  address: "3155 Bruckner Blvd",
  cityAndState: "Bronx, NY 10461",
  schedule: {
    "Mon – Fri": "8:30AM–12PM and 4–8PM",
    Sat: "8:30AM–2PM",
    Sunday: "CLOSED",
  },
};
