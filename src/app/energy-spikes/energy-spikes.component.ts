import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-energy-spikes',
  templateUrl: './energy-spikes.component.html',
  styleUrls: ['./energy-spikes.component.scss']
})
export class EnergySpikesComponent implements OnInit {

  viewhourly: any = [];
  dates1: any = []
  dates2: any = []
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
  chart: any = [];


  constructor(private service: ApiService) { }

  ngOnInit() {
    this.save();
  }

  mintime: any = [];
  min_time_show: any = [];

  maxtime: any = [];
  max_time_show: any = [];
  show_anomalies;
  show_date;
  show_graph: any = []
  save() {
    this.service.anomaly('17459928').subscribe(data => {

      this.viewhourly = data.anomalies;
      this.show_anomalies = data.num_of_anomalies
      this.show_graph = data.anomalies[0]['24_hours']
      this.show_date = data.anomalies[0].date
      this.maxtime = data.anomalies[0].hour;
      console.log(this.show_graph)


      if (this.maxtime == "hour_1") {
        this.maxtime = "00:00 AM to 1:00 AM"

      }
      else if (this.maxtime == "hour_2") {

        this.maxtime = "1:00 AM to 2:00 AM "

      }
      else if (this.maxtime == "hour_3") {

        this.maxtime = "2:00 AM to 3:00 AM "

      }

      else if (this.maxtime == "hour_4") {

        this.maxtime = "3:00 AM to 4:00 AM"

      }

      else if (this.maxtime == "hour_5") {

        this.maxtime = "4:00 AM to 5:00 AM "

      }

      else if (this.maxtime == "hour_6") {

        this.maxtime = "5:00 AM to 6:00 AM"

      }

      else if (this.maxtime == "hour_7") {

        this.maxtime = "6:00 AM to 7:00 AM"

      }

      else if (this.maxtime == "hour_8") {

        this.maxtime = "7:00 AM to 8:00 AM "

      }

      else if (this.maxtime == "hour_9") {

        this.maxtime = "8:00 AM to 9:00 AM "

      }

      else if (this.maxtime == "hour_10") {

        this.maxtime = "9:00 AM to 10:00 AM"

      }

      else if (this.maxtime == "hour_11") {

        this.maxtime = "10:00 AM to 11:00 AM"

      }

      else if (this.maxtime == "hour_12") {

        this.maxtime = "11:00 AM to 12:00 AM "

      }

      else if (this.maxtime == "hour_13") {

        this.maxtime = "12:00 PM to 1:00 PM"

      }

      else if (this.maxtime == "hour_14") {

        this.maxtime = "1:00 PM to 2:00 PM "

      }

      else if (this.maxtime == "hour_15") {

        this.maxtime = "2:00 PM to 3:00 PM"

      }
      else if (this.maxtime == "hour_16") {

        this.maxtime = "3:00 PM to 4:00 PM"

      }
      else if (this.maxtime == "hour_17") {

        this.maxtime = "4:00 PM to 5:00 PM"

      }
      else if (this.maxtime == "hour_18") {

        this.maxtime = "5:00 PM to 6:00 PM"

      }
      else if (this.maxtime == "hour_19") {

        this.maxtime = "6:00 PM to 7:00 PM"

      }
      else if (this.maxtime == "hour_20") {


        this.maxtime = "7:00 PM to 8:00 PM"

      }

      else if (this.maxtime == "hour_21") {

        this.maxtime = "8:00 PM to 9:00 PM"

      }

      else if (this.maxtime == "hour_22") {

        this.maxtime = "9:00 PM to 10:00 PM"

      }

      else if (this.maxtime == "hour_23") {

        this.maxtime = "10:00 PM to 11:00 PM"

      }

      else if (this.maxtime == "hour_24") {

        this.maxtime = "11:00 PM to 12:00 PM"

      }

















      this.dates1 = this.viewhourly.last_week
      this.dates2 = this.viewhourly.this_week
      // this.dates = 90;


      this.chart = new Chart('chart1',
        {
          type: 'bar',
          data: {
            labels: [
              '1-hour',
              '2-hour',
              '3-hour',
              '4-hour',
              '5-hour',
              '6-hour',
              '7-hour',
              '8-hour',
              '9-hour',
              '10-hour',
              '11-hour',
              '12-hour',
              '13-hour',
              '14-hour',
              '15-hour',
              '16-hour',
              '17-hour',
              '18-hour',

              '19-hour',
              '20-hour',
              '21-hour',
              '22-hour',
              '23-hour',
              '24-hour',
            ],
            datasets: [
              // labels:'this.week',
              {
                label: 'Last Week',
                data: [

                  this.show_graph[0],
                  this.show_graph[1],
                  this.show_graph[2],
                  this.show_graph[3],
                  this.show_graph[4],
                  this.show_graph[5],
                  this.show_graph[6],
                  this.show_graph[7],
                  this.show_graph[8],
                  this.show_graph[9],
                  this.show_graph[10],
                  this.show_graph[11],
                  this.show_graph[12],
                  this.show_graph[13],
                  this.show_graph[14],
                  this.show_graph[15],
                  this.show_graph[16],
                  this.show_graph[17],
                  this.show_graph[18],
                  this.show_graph[19],
                  this.show_graph[20],
                  this.show_graph[21],
                  this.show_graph[22],
                  this.show_graph[23],



                ],
                backgroundColor: [

                  '#20c997',
                  '#dc3545',
                  '#6610f2',
                  '#7AE2E2',
                  '#FF8BA4',
                  '#FFE29A',
                  '#2ECC71',
                  '#4C4C7C',
                  '#AF7AC5',
                  '#CB4335',
                  '#FF8BA4',
                  '#CB4335',
                  '#7AE2E2',
                  '#FFE29A',
                  '#2ECC71',
                  '#FFE29A',
                  '#FF8BA4',
                  '#48C9B0',
                  '#A04000',
                  '#4C4C7C',
                  '#B3B6B7',
                  '#CB4335',
                  '#D6DBDF',
                  '#0E6251',

                ]
              },


            ],

            // horizontalBar

          },
          options: {
            legend: {
              display: true,
              labels: {
                fontColor: 'rgb(255, 99, 132)'
              }
            }
          }

        })

    });

  }
}

