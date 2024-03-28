import Neo4jLogoBW from '../../logo.svg';
import Neo4jLogoColor from '../../logo-color.svg';
import { MoonIconOutline, SunIconOutline, Cog8ToothIconOutline } from '@neo4j-ndl/react/icons';
import { Typography, IconButton, Button } from '@neo4j-ndl/react';

export default function Header({ themeMode, toggleTheme }: { themeMode: string; toggleTheme: () => void }) {
  return (
    <div
      className='n-bg-palette-neutral-bg-weak p-1'
      style={{ borderBottom: '2px solid rgb(var(--theme-palette-neutral-border-weak))' }}
    >
      <nav
        className='flex items-center justify-between flex-row'
        role='navigation'
        data-testid='navigation'
        id='navigation'
        aria-label='main navigation'
      >
        <section className='flex w-1/3 shrink-0 grow-0 items-center grow min-w-[200px]'>
          <Typography variant='h6' component='a' href='#app-bar-with-responsive-menu' sx={{}}>
            <img
              src={themeMode === 'dark' ? Neo4jLogoBW : Neo4jLogoColor}
              className='h-8 min-h-8 min-w-8'
              alt='Neo4j Logo'
            />
          </Typography>
        </section>
        <section className='items-center justify-end w-1/3 grow-0 flex'>
          <div>
            <div className='inline-flex gap-x-1 flex grow-0 items-center gap-1'>
              <Button href='https://github.com/neo4j-labs/llm-graph-builder/issues' fill='outlined' target='_blank'>
                Github Issues
              </Button>
              <IconButton aria-label='Toggle Dark mode' clean size='large' onClick={toggleTheme}>
                {themeMode === 'dark' ? (
                  <span role='img' aria-label='sun'>
                    <SunIconOutline />
                  </span>
                ) : (
                  <span role='img' aria-label='moon'>
                    <MoonIconOutline />
                  </span>
                )}
              </IconButton>
              <IconButton aria-label='Toggle settings' size='large' clean>
                <Cog8ToothIconOutline />
              </IconButton>

              <Typography
                variant='subheading-large'
                style={{
                  ml: 'var(--space-8)',
                  mr: 'var(--space-8)',
                  width: '1px',
                  height: 'var(--space-16)',
                  backgroundColor: 'white',
                }}
              ></Typography>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
