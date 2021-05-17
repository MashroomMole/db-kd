import {equipment, ServerResponse} from './server.response';
import {EquipmentModel, WorkplaceModel} from '../../../shared/model/model';

/**
 * JSON adapter
 * mapping response from server to view model
 */
export class EquipmentAdapter {
  public static adapter(
    model: ServerResponse,
    ): WorkplaceModel {
    return {
      id: model.id,
      desk: model.desk,
      room: model.room,
      floor: model.floor,
      equipment: model.equipment.map(EquipmentAdapter.equipmentAdapter)
    };

  }

  public static equipmentAdapter(model: equipment): EquipmentModel {
    return {
      id: model.equipment.id,
      description: model.equipment.description,
      quantity: model.quantity,

    };

  }}
