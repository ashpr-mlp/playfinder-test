import { storiesOf, moduleMetadata } from '@storybook/angular';
import { PitchTableComponent } from './pitch-table.component';
import { PitchTableModule } from './pitch-table.module';

const pitches = [
    {
        id: 1,
        attributes: {
            name: 'Pitch 1',
            sport: 'football',
            format: '5 a side'
        }
    }, {
        id: 2,
        attributes: {
            name: 'Pitch 2',
            sport: 'rowing',
            format: 'outdoor'
        }
    }
];

storiesOf('Pitch/Components/Pitch Table', module)
    .addDecorator(moduleMetadata({
        imports: [PitchTableModule]
    }))
    .add('default', () => ({
        component: PitchTableComponent,
        props: {
            pitches,
        },
    }));
