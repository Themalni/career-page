import PositionView from './components/PositionView.vue'
import CurrentPositions from './components/CurrentPositions.vue'

export default [
    {path: '/', component: CurrentPositions},
    {path: '/position-view/:id', component: PositionView},
    {path: '/current-positions', component: CurrentPositions} 
]