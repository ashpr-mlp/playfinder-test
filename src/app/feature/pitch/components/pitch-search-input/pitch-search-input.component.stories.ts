import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { PitchSearchInputModule } from './pitch-search-input.module';
import { PitchSearchInputComponent } from './pitch-search-input.component';


storiesOf('Pitch/Components/Pitch Search Input', module)
    .addDecorator(moduleMetadata({
        imports: [PitchSearchInputModule]
    }))
    .add('default', () => ({
        component: PitchSearchInputComponent,
        props: {
            filtersChanged: action('filtersChanged')
        }
    }));
