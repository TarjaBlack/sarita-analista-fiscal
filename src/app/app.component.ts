import { Component, signal, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class]="'fixed w-full z-50 transition-all duration-300 ' + (scrolled() ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5')">
      <div class="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" class="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
          <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          Sarita Macedo
        </a>

        <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-200">
          <a href="#sobre" class="hover:text-emerald-400 transition-colors">Sobre mim</a>
          <a href="#servicos" class="hover:text-emerald-400 transition-colors">Serviços</a>
          <a href="#experiencia" class="hover:text-emerald-400 transition-colors">Trajetória</a>
          <a href="#contato" class="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full transition-colors shadow-lg shadow-emerald-500/30">Fale Comigo</a>
        </div>

        <button (click)="toggleMenu()" class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path *ngIf="!isMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path *ngIf="isMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div [class]="'md:hidden absolute w-full bg-slate-800 transition-all duration-300 overflow-hidden shadow-xl ' + (isMenuOpen() ? 'max-h-64 border-b border-slate-700' : 'max-h-0')">
        <div class="flex flex-col px-6 py-4 space-y-4 text-center">
          <a href="#sobre" (click)="closeMenu()" class="text-slate-200 hover:text-emerald-400">Sobre mim</a>
          <a href="#servicos" (click)="closeMenu()" class="text-slate-200 hover:text-emerald-400">Serviços</a>
          <a href="#experiencia" (click)="closeMenu()" class="text-slate-200 hover:text-emerald-400">Trajetória</a>
          <a href="#contato" (click)="closeMenu()" class="text-emerald-400 font-bold">Fale Comigo</a>
        </div>
      </div>
    </nav>

    <header id="home" class="relative bg-slate-900 min-h-screen flex items-center overflow-hidden pt-20">
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div class="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
        <div class="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px]"></div>
      </div>

      <div class="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        <div class="flex-1 text-center md:text-left">
          <div class="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide mb-6">
            Especialista Fiscal & Contábil
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Transformando complexidade <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">tributária</span> em segurança.
          </h1>
          <p class="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Consultoria e assessoria especializada para empresas do Simples Nacional, Lucro Presumido e Lucro Real. Mais inteligência e menos riscos para o seu negócio.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contato" class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-500/30 text-center flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              Solicitar Orçamento
            </a>
            <a href="#servicos" class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-full transition-all border border-slate-700 hover:border-slate-600 text-center">
              Ver Serviços
            </a>
          </div>
        </div>
        
        <div class="flex-1 flex justify-center md:justify-end">
          <div class="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-slate-800 p-2 shadow-2xl">
            <img src="src/assets/images/sarita-macedo.jpg" alt="Sarita Macedo" class="w-full h-full object-cover rounded-full shadow-inner" />
            
            <div class="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 px-6 py-4 rounded-2xl shadow-xl">
              <p class="text-emerald-400 font-bold text-xl">+10</p>
              <p class="text-slate-300 text-xs uppercase tracking-wider">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="sobre" class="py-24 bg-white">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row gap-16 items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-slate-900 mb-2">Conheça a Sarita</h2>
            <div class="w-20 h-1 bg-emerald-500 mb-8"></div>
            <p class="text-slate-600 text-lg leading-relaxed mb-6">
              Sou profissional graduada em <strong>Ciências Contábeis pela Universidade Estácio de Sá</strong> (2014-2019), com sólida experiência nas áreas fiscal e contábil.
            </p>
            <p class="text-slate-600 text-lg leading-relaxed mb-6">
              Ao longo da minha carreira, desenvolvi forte vivência na apuração de impostos, entrega de obrigações acessórias, análise profunda de dados fiscais e atendimento consultivo a clientes. Atuo com segurança em empresas optantes pelo <strong>Simples Nacional, Lucro Presumido e Lucro Real</strong>.
            </p>
            <p class="text-slate-600 text-lg leading-relaxed">
              Meu objetivo como consultora autônoma é garantir a conformidade tributária da sua empresa, evitando passivos e identificando oportunidades lícitas de economia.
            </p>
          </div>
          <div class="flex-1 w-full">
            <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                Competências Técnicas
              </h3>
              <div class="flex flex-wrap gap-3">
                  <span *ngFor="let skill of skills()" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:border-emerald-300 hover:text-emerald-600 transition-colors cursor-default">
                    {{ skill }}
                  </span>
                </div>
              <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4 flex items-center gap-2">
                <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Sistemas e Ferramentas
              </h3>
              <div class="flex gap-4">
                <span class="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-semibold">Sistema Domínio</span>
                <span class="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-semibold">Questor</span>
                <span class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg text-sm font-semibold">Excel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="servicos" class="py-24 bg-slate-50">
      <div class="container mx-auto px-6 md:px-12">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Soluções Fiscais Personalizadas</h2>
          <p class="text-slate-600 text-lg">Atendimento autônomo (freelancer) focado em resolver gargalos operacionais e garantir o compliance do seu escritório contábil ou empresa.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services()" class="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors" [innerHTML]="service.icon">
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">{{ service.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="experiencia" class="py-24 bg-white">
      <div class="container mx-auto px-6 md:px-12">
        <h2 class="text-3xl font-bold text-slate-900 mb-2 text-center">Trajetória Profissional</h2>
        <div class="w-20 h-1 bg-emerald-500 mb-16 mx-auto"></div>

        <div class="max-w-4xl mx-auto">
          <div class="relative border-l-2 border-emerald-100 ml-3 md:ml-0">
          <div *ngFor="let job of experiences()" class="mb-12 relative pl-8 md:pl-12 group">
            <div class="absolute w-6 h-6 bg-emerald-500 rounded-full -left-[13px] top-1 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
            
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors shadow-sm">
              <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-slate-800">{{ job.role }}</h3>
                <span class="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block w-max">{{ job.period }}</span>
              </div>
              <h4 class="text-md font-medium text-slate-500 mb-4">{{ job.company }}</h4>
              <p class="text-slate-600">{{ job.desc }}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section id="contato" class="py-24 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div class="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Precisa de suporte fiscal especializado?</h2>
        <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Estou disponível para projetos freelance, consultorias e parcerias com escritórios. Vamos conversar sobre como posso otimizar a rotina da sua empresa.
        </p>

        <div class="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="https://wa.me/5548988038545?text=Olá%20Sarita,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20serviços%20fiscais." target="_blank" 
             class="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/30 w-full md:w-auto justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            (48) 98803-8545
          </a>
          
          <a href="mailto:saritamacedo1988@gmail.com" 
             class="flex items-center gap-3 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white font-bold py-4 px-8 rounded-full transition-all w-full md:w-auto justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            saritamacedo1988&#64;gmail.com
          </a>
        </div>
      </div>
    </section>

    <footer class="bg-slate-950 pt-12 pb-6 border-t border-slate-800">
      <div class="container mx-auto px-6 md:px-12 text-center">
        <h3 class="text-xl font-bold text-white tracking-tighter mb-4">Sarita Macedo de Oliveira</h3>
        <p class="text-slate-400 mb-8">Palhoça - SC | Especialista em Ciências Contábeis</p>
        
        <div class="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">
            &copy; 2026 Sarita Macedo. Todos os direitos reservados.
          </p>
          
          <div class="bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg text-left inline-block">
            <p class="text-slate-500 text-xs uppercase tracking-wider mb-1 font-semibold">Criação & Desenvolvimento Web</p>
            <div class="flex items-center gap-4 text-sm text-slate-400">
              <span class="text-emerald-400 font-medium">Marcos Farias</span>
              <a href="mailto:m.diazfarias@gmail.com" class="hover:text-white transition-colors">m.diazfarias&#64;gmail.com</a>
              <a href="https://wa.me/5548988621897" target="_blank" class="hover:text-white transition-colors">(48) 98862-1897</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      scroll-behavior: smooth;
    }
    
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0f172a; 
    }
    ::-webkit-scrollbar-thumb {
      background: #10b981; 
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #059669; 
    }
  `]
})
export class App implements OnInit {
  isMenuOpen = signal(false);
  scrolled = signal(false);

  skills = signal([
    'Apuração de Tributos (ICMS, ISS, PIS, COFINS, IRPJ, CSLL)',
    'Obrigações Acessórias (SPED, DCTFWeb, EFD-Reinf)',
    'Análise de Dados Fiscais',
    'Conciliações Contábeis/Fiscais',
    'Legislação Fiscal e Tributária',
    'Lucro Real, Presumido e Simples Nacional'
  ]);

  services = signal([
    {
      title: 'Consultoria e BPO Fiscal',
      desc: 'Terceirização da rotina fiscal da sua empresa ou escritório com alta precisão técnica e foco no cliente de Lucro Real e Presumido.',
      icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
    },
    {
      title: 'Apuração de Tributos',
      desc: 'Cálculo rigoroso e seguro de impostos indiretos e diretos (ICMS, ISS, PIS, COFINS, IRPJ, CSLL) garantindo a carga tributária correta.',
      icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>'
    },
    {
      title: 'Obrigações Acessórias',
      desc: 'Geração, auditoria e transmissão de declarações como SPED Fiscal, Contribuições, DCTFWeb e EFD-Reinf sem atrasos ou penalidades.',
      icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>'
    }
  ]);

  experiences = signal([
    {
      role: 'Analista Fiscal / Consultora Fiscal (Autônoma)',
      company: 'Feltrin Contabilidade & Projetos Freelance',
      period: '01/2025 - Atual',
      desc: 'Responsável direta por 52 empresas, conduzindo toda a rotina de lançamentos fiscais, apuração de tributos e envio de obrigações acessórias (SPED).'
    },
    {
      role: 'Professora de Contabilidade',
      company: 'Secretaria de Educação SC',
      period: '07/2024 - 12/2024',
      desc: 'Docência nas disciplinas de contabilidade de custos e economia, formando novos profissionais com base em práticas reais de mercado.'
    },
    {
      role: 'Analista Fiscal BPO',
      company: 'Rói Contabilidade',
      period: '03/2024 - 10/2024',
      desc: 'Atuação especializada em clientes do regime de Lucro Real, com elaboração de relatórios gerenciais e análises avançadas de performance tributária.'
    },
    {
      role: 'Analista Fiscal',
      company: 'Ribeiro e Associados / Gicon Contabilidade',
      period: '04/2021 - 03/2024',
      desc: 'Emissão de NF, cálculos complexos de impostos, fechamento de competências fiscais e atendimento direto e consultivo aos clientes.'
    },
    {
      role: 'Assistente Fiscal',
      company: 'Veja do Brasil',
      period: '11/2014 - 03/2019',
      desc: 'Apoio fundamental no fechamento fiscal mensal, organização de documentos e alimentação estruturada das bases do SPED.'
    }
  ]);

  ngOnInit() {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}