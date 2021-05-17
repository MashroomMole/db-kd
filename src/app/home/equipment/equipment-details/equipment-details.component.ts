import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {WorkplaceModel} from '../../../shared/model/model';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
})

/**
 * EquipmentDetailsComponent renders user details pop-up
 * clears user state on destroy
 */
export class EquipmentDetailsComponent implements OnChanges {
  @Input()
  public loading: boolean;
  @Input()
  public equipment: WorkplaceModel;

  public model: WorkplaceModel;


  public ngOnChanges(changes: SimpleChanges): void {
    if ('equipment' in changes) {
      this.model = this.equipment;
    }
  }
}
