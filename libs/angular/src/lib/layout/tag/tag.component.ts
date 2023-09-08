import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.css"],
})
export class TagComponent implements OnChanges {
  @Input() class: string = "";
  @Input() bgColor: string = "";
  @Input() color: "primary" | "secondary" | "default" | "danger" | "success" | "warn" = "default";

  constructor() {
    this.bgColor = `bg-${this.color} `;
  }

  ngOnChanges(changes: SimpleChanges) {
    const color = changes["color"] ? changes["color"].currentValue : this.color;

    this.bgColor = ` bg-${color} `;
  }
}
