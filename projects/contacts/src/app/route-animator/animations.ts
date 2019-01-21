import {
    trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

const animatedRoutes = [
    'home <=> persons'
];

// Routable animations
export const slideInAnimation =
    trigger('routeAnimation', [
        transition(animatedRoutes.join(','), [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ top: '100px', opacity: 0 })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ top: '100px', opacity: 0 }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ bottom: 0, top: 0, opacity: 1 }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);

