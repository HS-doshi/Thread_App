import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
  @Input() name = "Hello! Write Your Name : ";
  @Input() placeholder = "Write something! whatever you want! It'll save your message!";
  @Input() buttonText = 'Create';
  @Output() formSubmitted = new EventEmitter<{
    text: string;
  }>();

  formSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nameElement = form.elements.namedItem('nameText') as HTMLInputElement;
    const nameText = nameElement.value;
    const textAreaElement = form.elements.namedItem(
      'commentText'
    ) as HTMLTextAreaElement;
    const commentText = textAreaElement.value;
    form.reset();
    console.log({nameText})
    console.log({ commentText });
    this.formSubmitted.emit({
      text: commentText,
    });
  }
}

