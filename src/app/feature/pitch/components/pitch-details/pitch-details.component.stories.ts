import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { PitchDetailsModule } from './pitch-details.module';
import { PitchDetailsComponent } from './pitch-details.component';

const pitch = {
    id: 1,
    attributes: {
        name: 'Test Pitch',
        about: 'About this pitch',
        sport: 'Sport',
        format: 'Format',
        operator: 'Operator',
        images: {
            large: [
                'https://via.placeholder.com/150'
            ]
        }
    }
};

storiesOf('Pitch/Components/Pitch Details', module)
    .addDecorator(moduleMetadata({
        imports: [PitchDetailsModule]
    }))
    .add('default', () => ({
        component: PitchDetailsComponent,
        props: {
            pitch
        }
    }))
    .add('loading', () => ({
        component: PitchDetailsComponent,
        props: {
            pitch: undefined
        }
    }));
