import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable, Subscription } from 'rxjs';
import { Audio } from '../model/audio';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnDestroy {
  public readonly list$ = new Observable<Audio[]>();
  public displayedColumns: string[] = ['id', 'name', 'file'];
  public dataSource: Audio[] = [];
  private readonly subscription = new Subscription();
  protected currentRow: Audio | null = null;
  constructor(private readonly httpService: HttpService) {
    this.list$ = this.httpService.getList();
    this.subscription = this.list$.subscribe((data) => {
      this.dataSource = data;
    });
  }

  protected setRow(row: Audio): void {
    this.currentRow = row;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
