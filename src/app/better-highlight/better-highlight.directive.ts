import { Directive, HostBinding, OnInit ,Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input()defaultColor='transparent';
  @Input() highlightColor="blue";
  @Input()defaultTextColor='black';
  @Input()highlightTextColor='white';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostBinding('style.color') color:string;

  constructor() { }
  ngOnInit(): void {
       this.backgroundColor=this.defaultColor;
       this.color=this.defaultTextColor;
  }

  @HostListener('mouseenter') mouseenter(eventData:Event){
      this.backgroundColor=this.highlightColor
      this.color=this.highlightTextColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
      this.backgroundColor=this.defaultColor;
      this.color=this.defaultTextColor;
  }

}
