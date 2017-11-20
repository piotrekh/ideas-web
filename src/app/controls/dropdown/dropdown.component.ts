import { Component, OnInit, Input, Output, EventEmitter, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownItem } from './dropdownitem.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  @Input() items: DropdownItem[] = [];

  selectedItem: DropdownItem = null;

  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  onChange = (key: string) => { };
  onTouched = () => { };

  get value(): string {
    return this.selectedItem.key;
  }

  set value(value: string) {
    const selectedKey = this.selectedItem ? this.selectedItem.key : null;
    if(selectedKey != value) {
      this.onChange(value);
    }
  }

  constructor() {
  }

  ngOnInit() {

  }

  public handleItemSelection(item: DropdownItem) {
    if (!this.disabled) {
      this.onTouched();
      this.writeValue(item.key);
    }
  }

  writeValue(key: string): void {
    if(this.items) {
      const item : DropdownItem = this.items.find(x => x.key == key);
      this.selectedItem = item;
      this.onChange(key);
    }
  }
  registerOnChange(fn: (key: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
