import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from '@core/service/generator/generator.service';
import { EmployeeData } from '@core/models/employeeData.model';
import { Observable, Subscription } from 'rxjs';
const names = ['Juan', 'Felipe', 'Jonathan'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];
  value$: Observable<number>;
  // sub$: Subscription;

  constructor(private generatorService: GeneratorService) {}

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
    this.value$ = this.generatorService.getData();
  /*   this.sub$ = this.generatorService.getData().subscribe((value) => {
      this.value = value;
    }); */
  }

  ngOnDestroy(): void {
    // this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }
}
