using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication10
{
    public partial class Form1 : Form
    {
        int cR, cG, cB;
        int cmR, cmG, cmB;
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "Imagenes JPG|*.jpg";
            openFileDialog1.ShowDialog();
            Bitmap bmp = new Bitmap(openFileDialog1.FileName);
            pictureBox1.Image = bmp;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void pictureBox1_MouseClick(object sender, MouseEventArgs e)
        {
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Color c = new Color();
            c = bmp.GetPixel(e.X, e.Y);
            cR = c.R;
            cG = c.G;
            cB = c.B;
            textBox1.Text = c.R.ToString();
            textBox2.Text = c.G.ToString();
            textBox3.Text = c.B.ToString();
            cmR = 0;
            cmG = 0;
            cmB = 0;
            for (int i = e.X; i < e.X + 5; i++)
                for (int j = e.Y; j < e.Y + 5; j++)
                {
                    c = bmp.GetPixel(i, j);
                    cmR = cmR + c.R;
                    cmG = cmG + c.G;
                    cmB = cmB + c.B;
                }
            cmR = cmR / 25;
            cmG = cmG / 25;
            cmB = cmB / 25;
            textBox1.Text = cmR.ToString();
            textBox2.Text = cmG.ToString();
            textBox3.Text = cmB.ToString();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Bitmap bmp2 = new Bitmap(bmp.Width, bmp.Height);
            Color c = new Color();
            for (int i=0;i<bmp.Width;i++)
                for (int j = 0; j <bmp.Height; j++)
                {
                    c = bmp.GetPixel(i, j);
                    bmp2.SetPixel(i, j, Color.FromArgb(0, 0, c.B));
                }
            pictureBox1.Image = bmp2;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Bitmap bmp2 = new Bitmap(bmp.Width, bmp.Height);
            Color c = new Color();
            int ciR, ciG, ciB;
            for (int i = 0; i < bmp.Width; i++)
                for (int j = 0; j < bmp.Height; j++)
                {
                    c = bmp.GetPixel(i, j);
                    ciR = c.R;
                    ciG = c.G;
                    ciB = c.B;
                    if (((cR - 10 < ciR) && (ciR < cR + 10)) && ((cG - 10 < ciG) && (ciG < cG + 10)) && ((cB - 10 < ciB) && (ciB < cB + 10)))
                    {
                        bmp2.SetPixel(i, j, Color.Red);
                    }
                    else
                    {
                        bmp2.SetPixel(i, j, Color.FromArgb(c.R, c.G, c.B));
                    }
                    
                }
            pictureBox1.Image = bmp2;
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Bitmap bmp = new Bitmap(pictureBox1.Image);
            Bitmap bmp2 = new Bitmap(bmp.Width, bmp.Height);
            Color c = new Color();
            int ciR, ciG, ciB;
            for (int i = 0; i < bmp.Width - 5; i = i + 5)
                for (int j = 0; j < bmp.Height - 5; j = j + 5)
                {
                    ciR = 0;
                    ciG = 0;
                    ciB = 0;
                    for (int x = i; x < i + 5; x++)
                        for (int y = j; y < j + 5; y++)
                        {
                            c = bmp.GetPixel(x, y);
                            ciR = ciR + c.R;
                            ciG = ciG + c.G;
                            ciB = ciB + c.B;
                            bmp2.SetPixel(x, y, Color.FromArgb(c.R, c.G, c.B));
                            if (((0 < c.R) && (c.R < 10)) && ((30 < c.G) && (c.G < 70)) && ((50 < c.B) && (c.B < 90)))
                                bmp2.SetPixel(x, y, Color.Red);
                            if (((65 < c.R) && (c.R < 85)) && ((95 < c.G) && (c.G < 115)) && ((65 < c.B) && (c.B < 85)))
                                bmp2.SetPixel(x, y, Color.Magenta);
                            if (((130 < c.R) && (c.R < 160)) && ((90 < c.G) && (c.G < 120)) && ((60 < c.B) && (c.B < 90)))
                                bmp2.SetPixel(x, y, Color.Yellow);

                        }
                    ciR = ciR / 25;
                    ciG = ciG / 25;
                    ciB = ciB / 25;

                    if (((0 < ciR) && (ciR < 20)) && ((20 < ciG) && (ciG < 70)) && ((40 < ciB) && (ciB < 90)))
                    {
                        for (int x = i; x < i + 5; x++)
                        {
                            for (int y = j; y < j + 5; y++)
                            {
                                bmp2.SetPixel(x, y, Color.Red);
                            }
                        }
                    }
                    if (((50 < ciR) && (ciR < 100)) && ((80 < ciG) && (ciG < 130)) && ((50 < ciB) && (ciB < 100)))
                    {
                        for (int x = i; x < i + 5; x++)
                        {
                            for (int y = j; y < j + 5; y++)
                            {
                                bmp2.SetPixel(x, y, Color.Magenta);
                            }
                        }
                    }
                    if (((110 < ciR) && (ciR < 180)) && ((70 < ciG) && (ciG < 140)) && ((40 < ciB) && (ciB < 100)))
                    {
                        for (int x = i; x < i + 5; x++)
                        {
                            for (int y = j; y < j + 5; y++)
                            {
                                bmp2.SetPixel(x, y, Color.Yellow);
                            }
                        }
                    }

                }
            pictureBox1.Image = bmp2;
        }
    }
}
