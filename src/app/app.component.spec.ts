import { TestBed } from '@angular/core/testing';
import { App } from './app.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app with default signal state', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
    expect(component.isMenuOpen()).toBe(false);
    expect(component.scrolled()).toBe(false);
    expect(component.skills()).toHaveLength(6);
    expect(component.services()).toHaveLength(3);
    expect(component.experiences()).toHaveLength(5);
  });

  it('should render the hero title and contact buttons', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Transformando complexidade');
    expect(compiled.querySelector('header a[href="#contato"]')?.textContent).toContain('Solicitar Orçamento');
    expect(compiled.querySelector('a[href^="https://wa.me/"]')).toBeTruthy();
    expect(compiled.querySelector('a[href^="mailto:"]')).toBeTruthy();
  });

  it('should toggle and close the mobile menu', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.isMenuOpen()).toBe(false);

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    expect(component.isMenuOpen()).toBe(true);

    component.closeMenu();
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should update the menu icon when the menu toggles', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const buttonIcon = () => fixture.nativeElement.querySelector('button svg path') as SVGPathElement;
    const initialPath = buttonIcon()?.getAttribute('d');
    expect(initialPath).toContain('M4 6h16');

    component.toggleMenu();
    fixture.detectChanges();
    const toggledPath = buttonIcon()?.getAttribute('d');
    expect(toggledPath).toContain('M6 18L18 6');
  });

  it('should set document scroll behavior to smooth on init', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(document.documentElement.style.scrollBehavior).toBe('smooth');
    expect(component).toBeTruthy();
  });

  it('should set scrolled true when window is scrolled', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    Object.defineProperty(window, 'scrollY', {
      value: 150,
      writable: true,
      configurable: true,
    });

    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();
    expect(component.scrolled()).toBe(true);
  });

  it('should exercise mobile menu click listeners and close links', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav') as HTMLElement;
    const toggleButton = nav.querySelector('button') as HTMLButtonElement;
    const mobileLinks = nav.querySelectorAll<HTMLAnchorElement>('div[class*="absolute"] a');

    expect(toggleButton).toBeTruthy();
    expect(mobileLinks.length).toBe(4);

    mobileLinks.forEach(link => {
      component.toggleMenu();
      fixture.detectChanges();
      expect(component.isMenuOpen()).toBe(true);

      link.click();
      fixture.detectChanges();
      expect(component.isMenuOpen()).toBe(false);
    });
  });

  it('should render all dynamic list items in the template', async () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const skills = compiled.querySelectorAll('section#sobre .flex.flex-wrap span');
    const services = compiled.querySelectorAll('section#servicos [class*="rounded-2xl"]');
    const experiences = compiled.querySelectorAll('section#experiencia .relative.pl-8');

    expect(skills.length).toBe(component.skills().length);
    expect(services.length).toBe(component.services().length);
    expect(experiences.length).toBe(component.experiences().length);
  });

  it('should toggle menu class state when opening and closing mobile menu', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav') as HTMLElement | null;
    const menu = nav?.querySelector('div[class*="md:hidden"]') as HTMLElement | null;
    expect(menu).toBeTruthy();
    expect(menu?.className).toContain('max-h-0');

    component.toggleMenu();
    fixture.detectChanges();
    expect(menu?.className).toContain('max-h-64');

    component.closeMenu();
    fixture.detectChanges();
    expect(menu?.className).toContain('max-h-0');
  });
});
