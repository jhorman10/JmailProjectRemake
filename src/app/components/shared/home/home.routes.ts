import { Routes } from '@angular/router';
import { InboxComponent } from '../inbox/inbox.component';
import { SentComponent } from '../sent/sent.component';
import { DeletedComponent } from '../deleted/deleted.component';
import { NewComponent } from '../new/new.component';

export const HOME_ROUTES: Routes = [

    { path: 'Inbox', component: InboxComponent },
    { path: 'Sent', component: SentComponent },
    { path: 'Deleted', component: DeletedComponent },
    { path: 'New', component: NewComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Inbox' }
];
