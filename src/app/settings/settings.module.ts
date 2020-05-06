import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsLayoutComponent } from './shared/components/settings-layout/settings-layout.component';

@NgModule({
    declarations: [
        SettingsLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: SettingsLayoutComponent , children: [
                   
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class SettingsModule {}
