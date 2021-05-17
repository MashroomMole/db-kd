/**
 * Represents the structure of server response. To be restructured to fit UserModel
 */
export type ServerResponse = {
  id: string,
  desk: string,
  room: string,
  floor: string,
  equipment: Array<equipment>

};

export type equipment = {
    id: string,
    equipment_id: string,
    workplace_id: string,
    quantity: string,
    equipment: {
      id: string,
      description: string
    },
};
